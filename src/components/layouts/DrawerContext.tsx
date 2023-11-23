import { useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

interface DrawerContextInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const drawerContext = createContext<DrawerContextInterface>(
  {} as DrawerContextInterface
);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <drawerContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </drawerContext.Provider>
  );
}

export const useDrawer = (): DrawerContextInterface =>
  useContext(drawerContext);
