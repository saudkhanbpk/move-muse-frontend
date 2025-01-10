import RecentKudos from "../RecentKudos/RecentKudos";

const FestivalData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Summerfest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Autumn Harvest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Winter Wonderland",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Spring Blossom",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Harvest Moon",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Starlight Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Music Fest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Food Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Art Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Film Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Cultural Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Fashion Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Literary Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Tech Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1502626126571-8e3835b649b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Science Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1476919257145-70d1eaaa9ea1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Summer Solstice",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1495611855912-d865d142eaba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Dragon Boat Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560534891-8eada1fc1a11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Midsummer Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483431732252-cb976fa9e6bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Oktoberfest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534866540820-1f3f8f14d1a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Carnival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534260681155-4d0b5b8f44b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Diwali",
    count: "7",
  },
];

export default function RecentKudosReviews() {
  return <RecentKudos users={FestivalData} />;
}
