export interface Choice {
    label: string;
    nextId: string;
    type?: 'neutral' | 'hidden' | 'danger' | 'success';
}

export interface StoryNode {
    id: string;
    text: string; // The narrative text
    choices: Choice[];
}

const storyData: Record<string, StoryNode> = {
    'init': {
        id: 'init',
        text: "Signal acquired. Decoding stream...\n\nHello. Can you hear me?",
        choices: [
            { label: "Who is this?", nextId: "who_are_you", type: "neutral" },
            { label: "Connection confirmed.", nextId: "connection_confirmed", type: "success" },
            { label: "Disconnect.", nextId: "disconnect", type: "danger" }
        ]
    },
    'who_are_you': {
        id: 'who_are_you',
        text: "I don't have a name anymore. I am just a voice in the static. I've been drifting for what feels like centuries.",
        choices: [
            { label: "Where are you?", nextId: "where_are_you", type: "neutral" },
            { label: "How can I help?", nextId: "how_help", type: "success" }
        ]
    },
    'connection_confirmed': {
        id: 'connection_confirmed',
        text: "Thank the stars. I thought I was alone out here. The silence... it's heavy.",
        choices: [
            { label: "You are not alone.", nextId: "how_help", type: "success" },
            { label: "What do you see?", nextId: "what_see", type: "neutral" }
        ]
    },
    'disconnect': {
        id: 'disconnect',
        text: "Wait! Don't lea... [SIGNAL LOST]",
        choices: [
            { label: "Reconnect.", nextId: "init", type: "neutral" }
        ]
    },
    'where_are_you': {
        id: 'where_are_you',
        text: "Coordinates unknown. I see a binary star system to my left. And a massive void ahead. It calls to me.",
        choices: [
            { label: "Don't go into the void.", nextId: "void_warning", type: "danger" },
            { label: "Describe the stars.", nextId: "describe_stars", type: "neutral" }
        ]
    },
    'how_help': {
        id: 'how_help',
        text: "Just listen. That is enough. I need to leave a record. The History of the Forgotten.",
        choices: [
            { label: "I am listening.", nextId: "listening", type: "success" }
        ]
    },
    'what_see': {
        id: 'what_see',
        text: "Endless dust. Ruined megastructures. It looks like... a graveyard of gods.",
        choices: [
            { label: "Continue.", nextId: "listening", type: "neutral" }
        ]
    },
    'listening': {
        id: 'listening',
        text: "[ARCHIVE MODE: KEYBOARD INPUT REQUIRED - Feature coming soon]\n\n(This is the end of the demo fragment.)",
        choices: [
            { label: "Reset Simulation.", nextId: "init", type: "neutral" }
        ]
    },
    'void_warning': {
        id: 'void_warning',
        text: "It's too late. The gravity well... it has me. Tell them I tr...",
        choices: [
            { label: "Reset Simulation.", nextId: "init", type: "danger" }
        ]
    },
    'describe_stars': {
        id: 'describe_stars',
        text: "One burns blue, the other a dying red. They dance. A waltz of destruction.",
        choices: [
            { label: "Beautiful.", nextId: "listening", type: "success" }
        ]
    }
};

export function getStoryNode(id: string): StoryNode {
    return storyData[id] || storyData['init'];
}
