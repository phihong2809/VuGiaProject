import { Link } from 'react-router-dom';
import { MapPin, Clock, Star } from 'lucide-react';
import { Tour, formatPrice } from '@/data/tours';

const TourCard = ({ tour }: { tour: Tour }) => {
  const hasDiscount = tour.originalPrice && tour.originalPrice > tour.price;
  const discountPercent = hasDiscount
    ? Math.round(((tour.originalPrice! - tour.price) / tour.originalPrice!) * 100)
    : 0;

  return (
    <div className="card-tour group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-md">
            -{discountPercent}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-secondary text-secondary" /> {tour.rating}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
          <MapPin className="w-3.5 h-3.5" /> {tour.destination}
        </div>
        <h3 className="font-display font-semibold text-card-foreground text-lg mb-2 line-clamp-2">
          {tour.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{tour.description}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Clock className="w-3.5 h-3.5" /> {tour.duration}
          <span className="text-muted-foreground/40">•</span>
          {tour.reviews} đánh giá
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-primary font-bold text-lg">{formatPrice(tour.price)}</div>
            {hasDiscount && (
              <div className="text-muted-foreground text-sm line-through">{formatPrice(tour.originalPrice!)}</div>
            )}
          </div>
          <Link to={`/tour/${tour.id}`} className="btn-primary text-sm px-4 py-2">
            Đặt tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
