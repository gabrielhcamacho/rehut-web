import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function TooltipComponent ({ ToolTitle }) {

    return (
        <Tooltip title={ToolTitle}>
            <IconButton>
                <AiOutlineInfoCircle/>
            </IconButton>
        </Tooltip>
    )
}
