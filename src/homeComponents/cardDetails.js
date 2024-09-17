import graph from "./images/graph.png";
import sort from "./sort.png";
import binSearch from "./images/binaryTree.png";
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
       {
           id:1,
           title:"PathFinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion.",
           route:"/graph",
           img:Recursion
       },
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
       {
           id:5,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }

   ]
}