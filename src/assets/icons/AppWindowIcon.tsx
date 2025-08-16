
import type { SVGProps } from 'react'

export function AppWindowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 10v11H3a1 1 0 0 1-1-1V10zm15 0v10a1 1 0 0 1-1 1H9V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z"
      ></path>
    </svg>
  )
}