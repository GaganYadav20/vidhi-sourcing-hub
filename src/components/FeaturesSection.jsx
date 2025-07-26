import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingCart, 
  Star, 
  MapPin, 
  TruckIcon, 
  CreditCard,
  BarChart3,
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Group Buying Power",
      description: "Join with nearby vendors to place bulk orders and get wholesale prices on quality ingredients.",
      badge: "Save 40%",
      color: "primary"
    },
    {
      icon: Star,
      title: "Verified Suppliers",
      description: "All suppliers go through 3-point verification: quality check, price audit, and delivery reliability.",
      badge: "Trusted",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Local Supply Network",
      description: "Find suppliers in your area for fresh ingredients and reduced transportation costs.",
      badge: "Nearby",
      color: "primary-glow"
    },
    {
      icon: TruckIcon,
      title: "Order Tracking",
      description: "Real-time tracking from order placement to delivery with SMS and app notifications.",
      badge: "Live Updates",
      color: "accent"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Pay how you want: UPI, cash on delivery, or weekly credit terms for regular customers.",
      badge: "Easy Pay",
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Price Analytics",
      description: "Compare prices across suppliers and track market trends to make informed buying decisions.",
      badge: "Smart Buying",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Built for Street Food Vendors
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Source Better
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From finding suppliers to tracking deliveries, we've built every feature with street food vendors in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${feature.color === 'primary-glow' ? 'primary' : feature.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color === 'primary-glow' ? 'primary' : feature.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Start Your First Group Order
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration fees • Free to join group orders • Pay only for what you buy
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;