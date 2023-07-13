import { useEffect, useRef } from 'react';

export default function Input({ value, onChange }) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus();
    }, []);

    return <input ref={ref} value={value} onChange={onChange} />;
}
