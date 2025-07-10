import { Heart, CreditCard, Smartphone, Building2, QrCode } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FinanceSection = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Online Giving',
      description: 'Secure online donations via credit card or bank transfer',
      action: 'Give Online',
      href: '#'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'MTN Mobile Money, Airtel Money, or Orange Money',
      action: 'Send to: 123-456-789',
      href: '#'
    },
    {
      icon: Building2,
      title: 'Bank Transfer',
      description: 'Direct bank transfer to our church account',
      action: 'Account: 1234567890',
      href: '#'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-soteria-goldenYellow/20 mb-6">
            <Heart className="h-8 w-8 text-soteria-goldenYellow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 slide-up">
            Tithes & Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Your generous giving helps us continue our mission of spreading God's love, 
            supporting our community, and making a lasting impact in the lives of others.
          </p>
        </div>

        {/* Heart Behind Giving */}
        <div className="mb-16">
          <Card className="soteria-card-gradient border-0 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">The Heart Behind Giving</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center leading-relaxed text-foreground">
                "Each of you should give what you have decided in your heart to give, not reluctantly 
                or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-soteria-goldenYellow">40%</div>
                  <h4 className="font-semibold text-primary">Ministry Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting worship, discipleship, and community outreach
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-soteria-goldenYellow">30%</div>
                  <h4 className="font-semibold text-primary">Staff & Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintaining facilities and supporting our ministry team
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-soteria-goldenYellow">30%</div>
                  <h4 className="font-semibold text-primary">Community Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Local missions, charity work, and community support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Ways to Give</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={method.title}
                className={`soteria-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-soteria-goldenYellow/20 w-fit">
                    <method.icon className="h-6 w-6 text-soteria-goldenYellow" />
                  </div>
                  <CardTitle className="text-xl text-primary">{method.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-soteria-crimsonRed text-white hover:bg-soteria-crimsonRed/90 transition-all w-full"
                    size="sm"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-center">
          <Card className="soteria-card-gradient border-0 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                <QrCode className="h-5 w-5 text-soteria-goldenYellow" />
                <span>Quick Give</span>
              </CardTitle>
              <CardDescription>
                Scan with your mobile banking app
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                QR Code for mobile money transfers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Transparency Message */}
        <div className="mt-16 text-center">
          <Card className="soteria-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Financial Transparency
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in complete transparency with our finances. Annual financial reports 
                are available to all members, and our books are regularly audited by independent 
                accountants to ensure proper stewardship of your generous contributions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;