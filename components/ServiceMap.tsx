import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

export const ServiceMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Alexandria, LA Coordinates
      const centerLat = 31.3113;
      const centerLng = -92.4451;

      const map = L.map(mapContainerRef.current).setView([centerLat, centerLng], 10);

      // Dark styled tiles to match the theme
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Service Area Circle
      L.circle([centerLat, centerLng], {
        color: '#F58025',
        fillColor: '#F58025',
        fillOpacity: 0.2,
        radius: 32000 // ~20 miles in meters
      }).addTo(map);
      
      // Marker
      // Creating a simple custom icon using divIcon to avoid asset loading issues in this environment
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #F58025; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      L.marker([centerLat, centerLng], { icon: customIcon })
        .addTo(map)
        .bindPopup('<b>Pop-A-Lock Alexandria</b><br>Central Dispatch')
        .openPopup();

      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup map instance on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="bg-pop-dark py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
             <MapPin className="text-pop-orange w-6 h-6" />
             <span className="text-pop-orange font-bold uppercase tracking-widest">Our Territory</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Serving Alexandria & <span className="text-pop-orange">Surrounding Areas</span>
          </h2>
        </div>
        
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-pop-gray z-10">
          <div ref={mapContainerRef} className="h-full w-full bg-gray-900" />
          
          {/* Map Overlay Card */}
          <div className="hidden md:block absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs z-[1000] border-l-4 border-pop-orange">
            <h4 className="font-bold text-gray-900 text-lg mb-2">Service Zone</h4>
            <p className="text-gray-600 text-sm mb-4">
              We provide rapid response within a 30-mile radius of Alexandria, LA.
            </p>
            <ul className="text-sm space-y-2 font-medium text-gray-800">
              <li>✓ Alexandria</li>
              <li>✓ Pineville</li>
              <li>✓ Woodworth</li>
              <li>✓ Boyce</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};