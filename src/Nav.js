import { mount } from 'nav/NavApp'
import React, {useEffect, useRef} from 'react'
import history from './history'

export default function Nav() {
    const ref = useRef(null)

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname : nextPathname}) => {
                const { pathname } = history.location;

                if(pathname !== nextPathname)
                    history.push(nextPathname)
            }
        })

        history.listen(onParentNavigate)
    }, [])

    return (
			<div
				ref={ref}
				className='dds__d-flex dds__flex-grow-1 dds__overflow-hidden'
			></div>
		);
}
