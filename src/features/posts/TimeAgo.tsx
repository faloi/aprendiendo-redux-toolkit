import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export interface TimeAgoParams {
  timestamp: string
}

function toTimeAgo(timestamp: string) {
  if (!timestamp) {
    return ''
  }

  const date = parseISO(timestamp)
  const timePeriod = formatDistanceToNow(date)
  return `${timePeriod} ago`
}

export const TimeAgo = ({ timestamp }: TimeAgoParams) => {
  return (
    <span title={timestamp}>
      &nbsp; <i>{toTimeAgo(timestamp)}</i>
    </span>
  )
}
