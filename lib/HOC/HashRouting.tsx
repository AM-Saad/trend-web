import React, { useEffect, useRef } from 'react';

// Create the Higher-Order Component
const withScrollToAnchor = (WrappedComponent: any) => {

    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const lastHash = useRef('');

        useEffect(() => {
            if (location.hash) {
                lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
            }

            if (lastHash.current && document.getElementById(lastHash.current)) {
                setTimeout(() => {
                    document
                        .getElementById(lastHash.current)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    lastHash.current = '';
                }, 100);
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

};

export default withScrollToAnchor;
