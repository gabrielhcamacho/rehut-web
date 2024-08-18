import React from 'react'

export default function ConfirmFormButton({ title }) {
    return (
        <button type="primary" htmlType="submit" className="flex self-center items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
            {title}
        </button>
    )
}
