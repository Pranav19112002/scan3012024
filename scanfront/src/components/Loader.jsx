import { css } from '@emotion/react';
import React, { useState } from 'react'
import { RingLoader } from 'react-spinners';

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override = css`
    display: "block",
  margin: "0 auto",
  borderColor: "red",`
        ;

    return (
        <div className='center-container'>
            <div>
                <RingLoader
                    color='#00FF00'
                    loading={loading}
                    css={override}
                    size={80}
                />
            </div>
        </div>

    )
}

export default Loader