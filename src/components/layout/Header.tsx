import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Church } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Teachings',
      href: '/teachings',
      dropdown: [
        { name: 'Sermons', href: '/teachings/sermons' },
        { name: 'Bible Studies', href: '/teachings/bible-studies' },
        { name: 'Devotionals', href: '/teachings/devotionals' },
      ]
    },
    {
      name: 'Programs',
      href: '/programs',
      dropdown: [
        { name: 'Sunday Service', href: '/programs/sunday-service' },
        { name: 'Prayer Meetings', href: '/programs/prayer' },
        { name: 'Special Events', href: '/programs/events' },
      ]
    },
    { name: 'Media', href: '/media' },
    { name: 'Cells', href: '/cells' },
    { name: 'Youth', href: '/youth' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Church className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Grace Community</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`flex items-center space-x-1 hover-gold ${
                          isActivePath(item.href) ? 'text-primary font-medium' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-card/95 backdrop-blur">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            to={dropdownItem.href}
                            className={`w-full hover-gold ${
                              isActivePath(dropdownItem.href) ? 'text-primary font-medium' : ''
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={`hover-gold ${
                      isActivePath(item.href) ? 'text-primary font-medium' : ''
                    }`}
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Button>
                )}
              </div>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover-gold"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 fade-in">
            {navigationItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <Link
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg hover-gold transition-colors ${
                    isActivePath(item.href) ? 'text-primary font-medium bg-accent-light' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className={`block px-4 py-1 text-sm rounded-lg hover-gold transition-colors ${
                          isActivePath(dropdownItem.href) ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;