import { useState } from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { XMLParser } from 'fast-xml-parser';
import { AsBuiltViewer } from './components/AsBuiltViewer';
import { AsBuiltData } from './types';

function App() {
  const [asBuiltData, setAsBuiltData] = useState<AsBuiltData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file has .ab extension
    if (!file.name.toLowerCase().endsWith('.ab')) {
      setError('Please select a valid AsBuilt file (.ab)');
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      try {
        const text = e.target?.result as string;
        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: '@_',
          numberParseOptions: {
            hex: false,
            leadingZeros: false,
          },
          preserveOrder: false,
          textNodeName: '#text',
        });
        const result = parser.parse(text);
        console.log('Parsed AsBuilt data:', result);
        setAsBuiltData(result);
        setError(null);
      } catch (err) {
        console.error('Error parsing AsBuilt file:', err);
        setError('Error parsing AsBuilt file. Please check the file format.');
      }
    };
    reader.onerror = () => {
      setError('Error reading file');
    };
    reader.readAsText(file);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          AsBuilt Browser
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Button variant="contained" component="label" sx={{ minWidth: 200 }}>
              Select AsBuilt File
              <input type="file" hidden accept=".ab" onChange={handleFileUpload} />
            </Button>
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Paper>

        {asBuiltData && <AsBuiltViewer data={asBuiltData} />}
      </Box>
    </Container>
  );
}

export default App;
