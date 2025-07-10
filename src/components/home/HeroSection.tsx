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
          alt="Soteria Higher Life Ministries Interior"
          className="w-full h-full object-cover"
        />
        {/* Remove or reduce the blue overlay for better image visibility */}
        {/* <div className="absolute inset-0 soteria-hero-gradient opacity-80"></div> */}
        <div className="absolute inset-0 bg-soteria-royalBlue opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to{' '}
            <span className="soteria-gold-gradient bg-clip-text text-transparent">
              Soteria
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            A place of healing, hope, and transformation through faith in Christ
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-soteria-goldenYellow text-soteria-textDark hover:bg-soteria-goldenYellow/90 transition-all px-8 py-3 text-lg font-semibold"
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
              className="border-soteria-royalBlue text-soteria-royalBlue bg-white hover:bg-soteria-royalBlue hover:text-white px-8 py-3 text-lg"
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
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-soteria-goldenYellow" />
                  <span>Sunday Worship: 9:00 AM & 11:00 AM</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-soteria-goldenYellow" />
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