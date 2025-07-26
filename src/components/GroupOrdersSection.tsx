import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, MapPin, Package } from "lucide-react";

const GroupOrdersSection = () => {
  const activeOrders = [
    {
      id: 1,
      item: "Fresh Vegetables Mix",
      supplier: "Kisan Wholesale Mart",
      location: "Karol Bagh",
      targetQuantity: 500,
      currentQuantity: 380,
      pricePerKg: "₹25",
      originalPrice: "₹40",
      timeLeft: "18 hours",
      participants: 28,
      status: "active"
    },
    {
      id: 2,
      item: "Refined Oil & Spices",
      supplier: "Delhi Spice Co.",
      location: "Chandni Chowk", 
      targetQuantity: 200,
      currentQuantity: 150,
      pricePerKg: "₹145",
      originalPrice: "₹180",
      timeLeft: "12 hours",
      participants: 15,
      status: "active"
    },
    {
      id: 3,
      item: "Flour & Rice Combo",
      supplier: "Grain Master Supplies",
      location: "Azadpur",
      targetQuantity: 1000,
      currentQuantity: 850,
      pricePerKg: "₹35",
      originalPrice: "₹50",
      timeLeft: "6 hours",
      participants: 42,
      status: "almost-full"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join Active Group Orders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump into ongoing bulk orders or start your own. The more vendors join, the better the price gets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {activeOrders.map((order) => {
            const progress = (order.currentQuantity / order.targetQuantity) * 100;
            const savings = Math.round(((parseInt(order.originalPrice.slice(1)) - parseInt(order.pricePerKg.slice(1))) / parseInt(order.originalPrice.slice(1))) * 100);
            
            return (
              <Card key={order.id} className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={order.status === 'almost-full' ? 'default' : 'secondary'}
                    className={order.status === 'almost-full' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {order.status === 'almost-full' ? 'Almost Full!' : 'Active'}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{order.pricePerKg}/kg</div>
                    <div className="text-sm text-muted-foreground line-through">{order.originalPrice}/kg</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{order.item}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>{order.supplier}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{order.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{order.participants} vendors joined</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{order.timeLeft} left</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{order.currentQuantity}/{order.targetQuantity} kg</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-accent font-semibold">{savings}% OFF</span>
                    <span className="text-muted-foreground"> market price</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Min order: 10kg
                  </div>
                </div>

                <Button 
                  variant={order.status === 'almost-full' ? 'hero' : 'default'} 
                  className="w-full"
                  size="lg"
                >
                  {order.status === 'almost-full' ? 'Join Now - Limited Spots!' : 'Join Group Order'}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">
              Don't see what you need?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start your own group order and invite nearby vendors to join for better prices.
            </p>
            <Button variant="hero" size="lg">
              Start New Group Order
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GroupOrdersSection;