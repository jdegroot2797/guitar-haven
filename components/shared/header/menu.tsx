import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <div className="space-x-2">
                    <ModeToggle />
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCartIcon /> Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href='/sign in'>
                            <UserIcon /> Sign In
                        </Link>
                    </Button>
                </div>
            </nav>
        </div>
    );
}

export default Menu;