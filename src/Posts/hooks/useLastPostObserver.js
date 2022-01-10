import {useRef, useCallback} from 'react';
import {subDays} from "date-fns";

function useLastPostObserver(dateRange, setDateRange, skip) {

    const observer = useRef()
    return useCallback((entries) => {
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !skip) {
                setDateRange(prevDateRange => {
                        return {
                            'endDate': subDays(prevDateRange.endDate, 3),
                            'startDate': subDays(prevDateRange.startDate, 3)
                        }
                    }
                )
            }
        }, {
            rootMargin: '100px'
        })
        if (entries) {
            observer.current.observe(entries)
        }
    }, [setDateRange])

}

export default useLastPostObserver;