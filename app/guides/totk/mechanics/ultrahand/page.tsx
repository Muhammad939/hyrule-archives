import { GiMechanicalArm } from 'react-icons/gi';
import GuideTemplate from '@/components/GuideTemplate';

const ultrahandSections = [
  {
    title: "Basics of Ultrahand",
    content: `Ultrahand is one of Link's new abilities in Tears of the Kingdom, allowing you to lift, move, and combine objects. 
    This powerful ability is essential for solving puzzles, creating vehicles, and exploring the world.`,
    subsections: [
      {
        title: "Controls",
        content: `- Hold L to activate Ultrahand\n- Use right stick to rotate objects\n- Press A to attach objects\n- Press B to cancel`
      },
      {
        title: "Basic Combinations",
        content: "Start with simple combinations like attaching logs to create bridges or combining weapons with objects."
      }
    ]
  },
  {
    title: "Advanced Techniques",
    content: `Master these advanced techniques to make the most of Ultrahand:`,
    subsections: [
      {
        title: "Precise Positioning",
        content: "Use the d-pad for fine adjustments when positioning objects."
      },
      {
        title: "Multi-Object Management",
        content: "Learn to handle multiple objects at once by creating stable bases first."
      }
    ]
  },
  {
    title: "Common Applications",
    content: `Ultrahand has numerous practical applications:`,
    subsections: [
      {
        title: "Transportation",
        content: "Create vehicles using fans, wheels, and steering components."
      },
      {
        title: "Combat",
        content: "Build weapon platforms and defensive structures."
      },
      {
        title: "Puzzle Solving",
        content: "Use Ultrahand to solve shrine puzzles and access new areas."
      }
    ]
  }
];

const relatedUltrahandGuides = [
  {
    title: "Vehicle Building",
    href: "/guides/totk/mechanics/vehicles",
    description: "Create advanced vehicles using Ultrahand"
  },
  {
    title: "Shrine Solutions",
    href: "/guides/totk/shrines",
    description: "Solve shrine puzzles with Ultrahand"
  },
  {
    title: "Combat Builds",
    href: "/guides/totk/mechanics/combat-builds",
    description: "Effective combat structures"
  }
];

export default function UltrahandGuidePage() {
  return (
    <GuideTemplate
      title="Ultrahand Guide"
      description="Master the art of object manipulation and construction"
      icon={<GiMechanicalArm />}
      sections={ultrahandSections}
      relatedGuides={relatedUltrahandGuides}
      mediaContent={{
        images: [
          {
            src: "/guides/totk/ultrahand/basic-controls.jpg",
            alt: "Ultrahand Basic Controls"
          },
          {
            src: "/guides/totk/ultrahand/vehicle-example.jpg",
            alt: "Example Vehicle Build"
          }
        ]
      }}
      lastUpdated="2024-02-20"
    />
  );
} 