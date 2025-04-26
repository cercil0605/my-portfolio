'use client';

import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot
} from '@mui/lab';
import { Typography, Paper, useMediaQuery, useTheme, Switch, Box, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { MobileCardTimeline } from './MobileCardTimeline';
import { DesktopCardTimeline } from './DesktopCardTimeline';

// parse json
function parseDate(dateStr) {
  const [startRaw] = dateStr.split(' - ');
  if (startRaw.includes('Present')) return Infinity;
  const [year, month] = startRaw.split('.').map(Number);
  return new Date(year, month - 1).getTime();
}

export function TimelineSection({ experience }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // switch state
  const [engineerMode, setEngineerMode] = useState(false); // false: Show All, true: Engineer
  const [isReverse, setIsReverse] = useState(false); // false: 新しい順, true: 古い順

  // filters
  const filteredExperience = experience.filter((item) => {
    if (engineerMode) {
      return item.tags?.includes('engineer');
    }
    return true;
  });

  // sort
  const sortedExperience = [...filteredExperience].sort((a, b) => {
    const compare = parseDate(a.date) - parseDate(b.date);
    return isReverse ? compare : -compare;
  });
  // pc mode
  return (
      <Box>
        {/* Switch */}
        <Box display="flex"
             flexDirection="column"
             mb={6}
             alignItems="flex-start"
        >
          <FormControlLabel
              control={
                <Switch
                    checked={engineerMode}
                    onChange={(e) => setEngineerMode(e.target.checked)}
                    color="warning"
                    sx={{ transform: 'scale(1.5)' }}
                />
              }
              label={
                  <Typography fontSize={20} fontWeight="bold" pl={2}>
                      {engineerMode ? "Engineer " : "Show All"}
                  </Typography>
                  }
          />
          <FormControlLabel
              control={
                <Switch
                    checked={isReverse}
                    onChange={(e) => setIsReverse(e.target.checked)}
                    color="warning"
                    sx={{ transform: 'scale(1.5)' }}
                />
              }
              label={
                  <Typography fontSize={20} fontWeight="bold" pl={2}>
                      {"Reverse"}
                  </Typography>
                  }
          />
        </Box>
        {/* Timeline */}
        { isMobile ? <MobileCardTimeline experience={sortedExperience} /> : <DesktopCardTimeline experience={sortedExperience} />}
      </Box>
  );
}
