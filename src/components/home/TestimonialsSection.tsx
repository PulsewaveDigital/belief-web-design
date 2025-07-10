import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Soteria Higher Life Ministries has been our spiritual sanctuary for over 5 years. The healing, hope, and transformation we've experienced here has completely changed our family's faith journey.",
      author: "Sarah & Michael Thompson",
      role: "Church Members since 2019"
    },
    {
      quote: "The youth ministry here transformed my life. Pastor David and the team showed me what it means to live for Christ, and I've grown so much in my faith and leadership abilities.",
      author: "Jessica Martinez",
      role: "Youth Ministry Graduate"
    },
    {
      quote: "After losing my job, the church family rallied around us with prayer, encouragement, and practical support. This community truly lives out the healing love of Christ.",
      author: "Robert Johnson",
      role: "Cell Group Member"
    },
    {
      quote: "The teaching here is biblical, practical, and life-changing. Every Sunday I leave feeling equipped and inspired to live out my faith in everyday life.",
      author: "Dr. Patricia Williams",
      role: "Ministry Leader"
    },
    {
      quote: "As a new Christian, I was welcomed with open arms. The discipleship program and small groups helped me understand my faith and build lasting friendships.",
      author: "David Chen",
      role: "New Member"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 soteria-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-soteria-goldenYellow/20 mb-6">
            <Quote className="h-8 w-8 text-soteria-goldenYellow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 slide-up">
            Hear from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Real stories from real people whose lives have been touched by God's love through 
            our church community.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="soteria-card-gradient border-0 relative overflow-hidden">
            <CardContent className="py-12 px-8 md:px-16">
              <div className="text-center space-y-6">
                {/* Quote Icon */}
                <div className="mx-auto w-fit">
                  <Quote className="h-12 w-12 text-soteria-goldenYellow/30" />
                </div>

                {/* Testimonial Content */}
                <div className="fade-in" key={currentTestimonial}>
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-primary text-lg">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-4 pt-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="hover-sky-blue rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? 'bg-soteria-goldenYellow'
                            : 'bg-muted-foreground/30'
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="hover-sky-blue rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="soteria-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Your Story Matters Too
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We'd love to hear how God is working in your life and how our church 
                community has been part of your journey. Share your testimony with us!
              </p>
              <Button
                size="lg"
                className="bg-soteria-goldenYellow text-soteria-textDark hover:bg-soteria-goldenYellow/90 transition-all"
              >
                Share Your Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;