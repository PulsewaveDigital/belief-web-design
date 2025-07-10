import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Teachings', href: '/teachings' },
    { name: 'Programs', href: '/programs' },
    { name: 'Youth Ministry', href: '/youth' },
    { name: 'Cell Groups', href: '/cells' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'Sunday Service', href: '/programs/sunday-service' },
    { name: 'Prayer Meeting', href: '/programs/prayer' },
    { name: 'Bible Study', href: '/teachings/bible-studies' },
    { name: 'Youth Programs', href: '/youth' },
    { name: 'Cell Groups', href: '/cells' },
    { name: 'Special Events', href: '/programs/events' },
  ];

  return (
    <footer className="bg-soteria-deepNavy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/logo.jpg" 
                alt="Soteria Higher Life Ministries Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Soteria</span>
                <span className="text-sm text-soteria-goldenYellow">Higher Life Ministries</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              A place of healing, hope, and transformation through faith in Christ.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-soteria-goldenYellow" />
                <span>123 Church Street, Community City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-soteria-goldenYellow" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-soteria-goldenYellow" />
                <span>info@soteriahlm.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-soteria-goldenYellow">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/80 hover:text-soteria-goldenYellow transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-soteria-goldenYellow">Programs</h3>
            <div className="space-y-2">
              {programs.map((program) => (
                <Link
                  key={program.name}
                  to={program.href}
                  className="block text-white/80 hover:text-soteria-goldenYellow transition-colors"
                >
                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-soteria-goldenYellow">Stay Connected</h3>
            <p className="text-sm text-white/80">
              Subscribe to our newsletter for updates and inspiration.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                size="sm" 
                className="bg-soteria-goldenYellow text-soteria-textDark hover:bg-soteria-goldenYellow/90"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-3 pt-2">
              <Button size="icon" variant="ghost" className="text-white hover:text-soteria-goldenYellow hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-soteria-goldenYellow hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-soteria-goldenYellow hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-soteria-goldenYellow hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-soteria-goldenYellow">Service Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-white">Sunday Worship</div>
                <div className="text-white/80">9:00 AM & 11:00 AM</div>
              </div>
              <div>
                <div className="font-medium text-white">Wednesday Prayer</div>
                <div className="text-white/80">7:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-white">Friday Youth</div>
                <div className="text-white/80">6:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2024 Soteria Higher Life Ministries. All rights reserved. Built with love for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;