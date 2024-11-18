import { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    Typography,
    Grid,
    Box
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// Define the structure of our story nodes
interface StoryNode {
    id: string
    text: string
    image: string
    choices: {
        text: string
        nextNode: string
    }[]
}

// Define the structure of our story data
interface StoryData {
    [key: string]: StoryNode
}

// Sample story data
const sampleStoryData: StoryData = {
    start: {
        id: 'start',
        text: "You find yourself at the entrance of a mysterious cave. The air is thick with anticipation.",
        image: "https://images.unsplash.com/photo-1496185106368-308ed96f204b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F2ZSUyMGVudHJhbmNlfGVufDB8fDB8fHww",
        choices: [
            { text: "Enter the cave", nextNode: "cave" },
            { text: "Explore the surrounding forest", nextNode: "forest" },
            { text: "Return to the village", nextNode: "village" }
        ]
    },
    cave: {
        id: 'cave',
        text: "The cave is dark and damp. You hear strange echoes in the distance.",
        image: "https://images.unsplash.com/photo-1504736038806-94bd1115084e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGNhdmV8ZW58MHx8MHx8fDA%3D",
        choices: [
            { text: "Go deeper into the cave", nextNode: "deepCave" },
            { text: "Search for a light source", nextNode: "torch" },
            { text: "Exit the cave", nextNode: "start" }
        ]
    },
    forest: {
        id: 'forest',
        text: "The forest is lush and green. You spot a hidden path leading to a clearing.",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww",
        choices: [
            { text: "Follow the hidden path", nextNode: "clearing" },
            { text: "Climb a tall tree for a better view", nextNode: "treeTop" },
            { text: "Return to the cave entrance", nextNode: "start" }
        ]
    },
    village: {
        id: 'village',
        text: "The village is bustling with activity. An old sage approaches you.",
        image: "https://images.unsplash.com/photo-1569951707784-3b3e983b2c2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWV2YWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
        choices: [
            { text: "Speak with the sage", nextNode: "sage" },
            { text: "Visit the local tavern", nextNode: "tavern" },
            { text: "Leave the village and return to the cave", nextNode: "start" }
        ]
    }
}

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

export default function Component({ initialStoryData = sampleStoryData }: { initialStoryData?: StoryData }) {
    const [currentNode, setCurrentNode] = useState<StoryNode>(initialStoryData.start)

    const handleChoice = (nextNode: string) => {
        setCurrentNode(initialStoryData[nextNode])
    }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom>
                                Your Adventure
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {currentNode.text}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {currentNode.choices.map((choice, index) => (
                                    <Button
                                        key={index}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleChoice(choice.nextNode)}
                                        fullWidth
                                    >
                                        {choice.text}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                sx={{ position: 'relative', width: '100%', height: 300 }}
                                alt="Scene illustration"
                                src={currentNode.image}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}