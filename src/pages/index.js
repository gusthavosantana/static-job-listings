import { FilterProvider } from '../context/filter';
import Home from '../components/Home';

export default function Index() {

  return (
    <FilterProvider>
      <Home />
    </FilterProvider>
  )
}
