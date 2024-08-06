'use client';

import { useFecthCharacters } from '@/features/characters/infrastructure/hooks/useFetchCharacters';
import ProgressBar from '@/presentation/components/ui/progress-bar/progress-bar';
import MainView from '@/presentation/components/main-view/main-view';

const HomeView = () => {
  const { data } = useFecthCharacters();

  if (!data) {
    return <ProgressBar />;
  }

  return data && <MainView characters={data} />;
};

export default HomeView;
