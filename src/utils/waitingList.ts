import { type EnrollmentData } from '../components/EnrollmentForm';

export interface WaitingListEntry extends EnrollmentData {
  id: string;
  status: 'waiting' | 'approved' | 'rejected' | 'payment_failed';
  additionalInfo?: {
    address?: string;
    qualification?: string;
    experience?: string;
  };
  enrolledAt: string;
}

export const addToWaitingList = (enrollmentData: EnrollmentData, additionalInfo?: any): WaitingListEntry => {
  const existingList = getWaitingList();
  
  const newEntry: WaitingListEntry = {
    ...enrollmentData,
    id: `enroll_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    status: enrollmentData.paymentStatus === 'success' ? 'waiting' : 'payment_failed',
    additionalInfo,
    enrolledAt: new Date().toISOString()
  };

  existingList.push(newEntry);
  localStorage.setItem('waitingList', JSON.stringify(existingList));

  return newEntry;
};

export const getWaitingList = (): WaitingListEntry[] => {
  try {
    const data = localStorage.getItem('waitingList');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading waiting list:', error);
    return [];
  }
};

export const updateWaitingListEntry = (id: string, updates: Partial<WaitingListEntry>): boolean => {
  const list = getWaitingList();
  const index = list.findIndex(entry => entry.id === id);
  
  if (index === -1) return false;
  
  list[index] = { ...list[index], ...updates };
  localStorage.setItem('waitingList', JSON.stringify(list));
  return true;
};

export const removeFromWaitingList = (id: string): boolean => {
  const list = getWaitingList();
  const filtered = list.filter(entry => entry.id !== id);
  
  if (filtered.length === list.length) return false;
  
  localStorage.setItem('waitingList', JSON.stringify(filtered));
  return true;
};

export const getWaitingListStats = () => {
  const list = getWaitingList();
  return {
    total: list.length,
    waiting: list.filter(e => e.status === 'waiting').length,
    approved: list.filter(e => e.status === 'approved').length,
    failed: list.filter(e => e.status === 'payment_failed').length
  };
};


