'use client';

import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '@/firebase/config';

export function useFirebaseData<T>(path: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    const dbRef = ref(database, path);

    onValue(
      dbRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const val = snapshot.val();
          if (typeof val === 'object' && val !== null) {
            const arr = Object.entries(val).map(([key, item]) => ({
              ...(item as object),
              id: key,
            }));
            setData(arr as T);
          } else {
            setData(val as T);
          }
        }
      },
      (error) => {
        console.error(`Firebase error at path ${path}:`, error);
      }
    );

    return () => off(dbRef);
  }, [path]);

  return data;
}
