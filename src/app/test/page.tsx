import link from "next/link";
import StatiBanner from './StatiBanner';
import DynamicCatalog from './DynamicCatalog';
import SearchBar from './SearchBar';

export const metadata = {
    title: 'Test Page',
}

interface TestPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

export default function TestPage() {
    
}