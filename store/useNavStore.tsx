import { create } from 'zustand'

interface NavState {
  isOpen: boolean
  openNav: () => void
  closeNav: () => void
}

export const useNavStore = create<NavState>((set) => ({
  isOpen: false,
  openNav: () => set({ isOpen: true }),
  closeNav: () => set({ isOpen: false }),
}))