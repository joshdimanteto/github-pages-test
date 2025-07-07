'use client';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const sections = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'The Problem', id: 'problem' },
  { label: 'The Solution', id: 'solution' },
  { label: 'The Software', id: 'software' },
  { label: 'Contact Us', id: 'contact' },
];

export default function Home() {
  return (
    <div style={{ minWidth: '200px', width: '100%', height: '100vh' }}>
      <AppBar position="static" sx={{ width: '100%' }}>
        <Toolbar
          sx={{
            position: 'relative',
            minHeight: '64px',
            py: 1, // vertical padding so it looks good when wrapping
            flexWrap: 'wrap', // allow toolbar content to wrap if needed
            display: 'flex',
            justifyContent: 'center', // space between logo and nav items
          }}
        >
          {/* Logo placeholder (left-aligned) */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/github-pages-test/scigateway-white-text-blue-mark-logo.svg"
              alt="Scigateway Logo"
              width={100}
              height={24}
              priority
            />
          </Box>

          {/* Centered navigation for large screens */}
          <Stack
            direction="row"
            sx={{
              flexWrap: 'wrap', // allow nav items to wrap on small widths
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              columnGap: 12,
              px: 2,
              maxWidth: '100%',
              margin: '0 auto',
              overflowX: 'hidden', // prevent horizontal scroll if wrapping
            }}
          >
            {sections.map((section) => (
              <Typography
                variant="h5"
                key={section.id}
                component="span"
                sx={{
                  whiteSpace: 'normal', // allow wrapping inside each item if needed
                }}
                noWrap
              >
                <Link
                  href={`#${section.id}`}
                  underline="none"
                  color="inherit"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {section.label}
                </Link>
              </Typography>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Page Sections */}

        <Box id="title" sx={{ mb: 6 }}>
          <Typography variant="h3" gutterBottom>
            Title
          </Typography>
        </Box>

        <Box id="introduction" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </Box>

        <Box id="problem" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            The Problem
          </Typography>
          <Typography variant="body1">
            Integer nec odio. Praesent libero...
          </Typography>
        </Box>

        <Box id="solution" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            The Solution
          </Typography>
          <Typography variant="body1">
            Sed cursus ante dapibus diam...
          </Typography>
        </Box>

        <Box id="software" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            The Software
          </Typography>
          <Typography variant="body1">
            Hosted on GitHub with open source collaboration in mind.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/ral-facilities/inventory-management-system"
              target="_blank"
              rel="noopener"
            >
              View on GitHub
            </Button>
          </Box>
        </Box>

        <Box id="contact" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Please reach out via GitHub or email the development team.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link
              href="https://github.com/ral-facilities/inventory-management-system/issues"
              target="_blank"
              rel="noopener"
            >
              Open an Issue on GitHub
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
