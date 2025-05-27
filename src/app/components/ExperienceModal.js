import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Typography, Modal, Link as MuiLink } from '@mui/material';

function renderIcon(type) {
    switch (type) {
        case 'github':
            return <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />;
        case 'article':
            return <ArticleIcon fontSize="small" sx={{ mr: 0.5 }} />;
        case 'X':
            return <XIcon fontSize="small" sx={{ mr: 0.5 }} />;
        default:
            return <LaunchIcon fontSize="small" sx={{ mr: 0.5 }} />;
    }
}

export default function ExperienceModal({ open, onClose, experience }) {
    if (!experience) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                tabIndex={-1}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 600,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    outline: 'none',
                    border: 'none',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {experience.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {experience.date}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {experience.content}
                </Typography>

                {/* 🔽 モーダル内にのみリンク表示 */}
                {experience.links?.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        {experience.links.map((link) => (
                            <Box key={link.url} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                {renderIcon(link.type)}
                                <MuiLink
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    sx={{ fontSize: 14, ml: 0.5 }}
                                >
                                    {link.label}
                                </MuiLink>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Modal>
    );
}
