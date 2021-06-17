import { useMemo, useState } from 'react';

export type SortDirection = 'asc' | 'desc';

interface SortConfig<T extends object> {
  field: keyof T;
  direction: SortDirection;
}

export const useSortableData = <T extends object>(
  items: T[],
  config: SortConfig<T> | null = null
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(config);

  const requestSort = (field: keyof T): void => {
    let direction: SortDirection = 'asc';
    if (sortConfig?.field === field && sortConfig.direction === 'asc')
      direction = 'desc';

    setSortConfig({ field, direction });
  };

  let sortedItems = useMemo(() => {
    const itemsToSort = [...items];

    if (sortConfig == null) return itemsToSort;

    itemsToSort.sort((a, b) => {
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      return 0;
    });

    return itemsToSort;
  }, [sortConfig, items]);

  return { sortedItems, sortConfig, requestSort };
};
