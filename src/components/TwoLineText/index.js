import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

export default function TwoLineText({resource, variant1, variant2, style1, style2}) {

  return (
    <>
        <Typography
            variant={variant1}
            sx={{style1}}
        >
            {resource.line1}
        </Typography>
        <Typography
            variant={variant2}
            sx={style2}
        >
            {resource.line2}
    </Typography>
  </>
  )
}
TwoLineText.propTypes = {
  resource: PropTypes.PropTypes.objectOf(PropTypes.string).isRequired,
  variant1: PropTypes.string.isRequired,
  variant2: PropTypes.string.isRequired,
  style1: PropTypes.object,
  style2: PropTypes.object,
};
