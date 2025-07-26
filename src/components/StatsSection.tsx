const StatsSection = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Active Vendors",
      description: "Street food vendors using our platform"
    },
    {
      number: "₹2.5 Cr",
      label: "Money Saved",
      description: "Through group buying in last 6 months"
    },
    {
      number: "500+",
      label: "Verified Suppliers",
      description: "Quality-checked ingredient suppliers"
    },
    {
      number: "98%",
      label: "On-time Delivery",
      description: "Orders delivered within promised time"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted by India's Street Food Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real impact, real savings, real trust built by bringing vendors together
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;