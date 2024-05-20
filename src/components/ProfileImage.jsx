// import { useState } from 'react';
// import Loader from './Loader';

// function HeroImage({ src, alt }) {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div className="relative w-full  flex items-center justify-center">
//       {loading && (
//         <Loader />
//       )}
//       <img
//         src={src}
//         alt={alt}
//         className={`w-full h-full object-cover ${loading ? 'hidden' : 'block'}`}
//         onLoad={() => setLoading(false)}
//       />
//     </div>
//   );
// }

// export default HeroImage;

import { useState } from 'react';
import Loader from './Loader';

function HeroImage({ src, alt }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" relative w-full flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader height="80" width="80" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${loading ? 'hidden' : 'block'}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default HeroImage;

