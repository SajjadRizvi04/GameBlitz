import "./SupportedSports.css";

export function SupportedSports() {
    const sports = [
        { name: "Football", img: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c7/02/d5/d7/66/v1_E10/E105UC2H.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=efc24925cf9c95a64cbaa9209ecee7006271b0f9db928b6a5f3f559d9813bed4" },
        { name: "Cricket", img: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f9/d7/15/2b/04/v1_E10/E101AM0Y.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=ea6e7eb8add3ab5ab544c8e86bef3f66d899bb8c8807c93c6a9c3f11a6d18632" },
        { name: "Volleyball", img: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4a/28/fd/b6/6a/v1_E10/E10HPOMR.JPG?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=92ce808861ebd1f580a6b7085a1e1c8ec0f926af86ef858fc6255af9c89ab237" },
        { name: "Basketball", img: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/6e/a6/95/7b/4a/v1_E10/E1051GGO.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e8846cc85ccef88d5c6e79708b342877a6234be681f1ce989ec3b5c0d2b083c2" },
    ];

  return (
    <section className="supported-sports">
      <h2 className="supported-sports__title">Sports</h2>

      <div className="supported-sports__list">
        {sports.map((sport, index) => (
          <SportCard key={index} sport={sport} />
        ))}
      </div>
    </section>
  );
}

// Reusable Card Component
function SportCard({ sport }) {
  return (
    <div className="sport-card">
      
      <div className="sport-card__thumbnail">
        {sport.img ? (
          <img src={sport.img} alt={sport.name} />
        ) : (
          <div className="sport-card__placeholder">No Image</div>
        )}
      </div>

      <div className="sport-card__details">
        <span className="sport-card__name">{sport.name}</span>
      </div>

    </div>
  );
}