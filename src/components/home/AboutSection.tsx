import { Heart, Target, Eye, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love',
      description: 'We love God, love people, and love our community with genuine hearts.'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'We exist to make disciples who make disciples and transform lives.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To see every person in our community encounter the life-changing love of Jesus.'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Members' },
    { number: '15', label: 'Years of Ministry' },
    { number: '50+', label: 'Cell Groups' },
    { number: '25+', label: 'Programs' }
  ];

  return (
    <section className="py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 slide-up">
            About Grace Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-up">
            For over 15 years, Grace Community has been a beacon of hope and love in our city. 
            We are a diverse, vibrant family of believers committed to worshiping God, growing in faith, 
            and serving our community with the transforming love of Jesus Christ.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="church-card-gradient max-w-4xl mx-auto border-0 hover-lift">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed text-foreground">
                "To create a community where people can find and follow Jesus, 
                grow in their faith, and make a lasting impact in the world through love, 
                service, and authentic relationships."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`church-card-gradient border-0 hover-lift fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent-light w-fit">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center bounce-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Believe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">What We Believe</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>The Bible</strong> as the inspired, authoritative Word of God
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>Jesus Christ</strong> as our Lord and Savior, fully God and fully man
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>Salvation by grace</strong> through faith, not by works
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>The Holy Spirit's</strong> power to transform lives and empower ministry
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>The Church</strong> as the body of Christ, called to unity and mission
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="church-card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span>Find Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground">123 Church Street</p>
                <p className="text-foreground">Community City, CC 12345</p>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="church-card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span>Service Times</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground">Sunday Worship</span>
                  <span className="text-muted-foreground">9:00 AM & 11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Wednesday Prayer</span>
                  <span className="text-muted-foreground">7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Friday Youth</span>
                  <span className="text-muted-foreground">6:30 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;