import { Link } from 'react-router-dom';
import { Play, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/church-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Grace Community Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 church-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to{' '}
            <span className="church-gold-gradient bg-clip-text text-transparent">
              Grace Community
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Where faith grows, community thrives, and lives are transformed by God's love
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="church-gold-gradient hover:opacity-90 transition-opacity px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link to="/programs/sunday-service">
                <Calendar className="mr-2 h-5 w-5" />
                Join Us This Sunday
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
              asChild
            >
              <Link to="/media">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Link>
            </Button>
          </div>

          {/* Service Times */}
          <div className="pt-12">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Sunday Worship: 9:00 AM & 11:00 AM</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-primary-foreground/30"></div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Wednesday Prayer: 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;