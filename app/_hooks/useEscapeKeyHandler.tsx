import { useEffect } from "react";

export default function useKeyHandler(
  key: string = 'Escape',
  controller: VoidFunction,
  booleanCondition: boolean
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key && booleanCondition) {
        controller();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [booleanCondition, controller]);
}
