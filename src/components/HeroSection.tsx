import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, TrendingDown, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-vendors.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Users className="h-4 w-4 mr-2" />
              Join 5000+ Street Food Vendors
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Unite. Source. Save.
              </span>
              <br />
              <span className="text-foreground">
                Better Prices Together
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Join group orders with fellow vendors to get wholesale prices on quality ingredients. 
              Verified suppliers, transparent pricing, tracked deliveries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Group Buying
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Suppliers
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full" />
                <span>Instant verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">40% Lower Costs</h3>
                  <p className="text-muted-foreground">
                    Group buying power reduces individual ingredient costs by up to 40% compared to market rates.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verified Quality</h3>
                  <p className="text-muted-foreground">
                    All suppliers verified through 3-point quality checks with vendor ratings and reviews.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary-glow/5 to-primary/5 border-primary-glow/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Track your orders in real-time with guaranteed delivery within 24-48 hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;