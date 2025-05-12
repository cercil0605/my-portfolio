'use client';

import { useState } from "react";
import {
    Timeline, TimelineConnector, TimelineContent,
    TimelineDot, TimelineItem, TimelineSeparator
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import ExperienceModal from "./ExperienceModal";

export function DesktopCardTimeline({ experience }) {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Timeline position="alternate">
                {experience.map((item, i, arr) => (
                    <TimelineItem key={item.date + item.title}>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: '#222' }} />
                            {i !== arr.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: 2 }}>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                                {item.date}
                            </Typography>
                            <Paper
                                elevation={1}
                                onClick={() => setSelected(item)}
                                sx={{
                                    p: 2,
                                    bgcolor: '#fff',
                                    border: '1.5px solid #ccc',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-4px)',
                                    },
                                    textAlign: "left"
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {item.content}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

            <ExperienceModal
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
                experience={selected}
            />
        </>
    );
}
