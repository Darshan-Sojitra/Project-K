import React from 'react'
import './Public.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Public = () => {
  return (
               <div className='home-container-1'>
               <LeftSidebar/>
               <RightSidebar/>
             
              <div className="home-container-2">
              <div className="Public-Ques">
                <h1>Running Open Contest!</h1><hr/>
                <h2>Questions of the Day</h2>
                <div className="ques">
                 <h2>1. Partition a set into two subsets such that the difference of subset sums is minimum</h2>
                 <p>Given a set of integers, the task is to divide it into two sets S1 and S2 such that the absolute difference between their sums is minimum. 
                 If there is a set S with n elements, then if we assume Subset1 has m elements, Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.</p>        
                </div>
                <div className="ques">
                 <h2>2. 10-1 Knapsack Problem </h2>
                 <p>Given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that the sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property)</p>        
                </div>
                <div className="ques">
                 <h2>3. Word Break Problem</h2>
                 <p>Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated sequence of dictionary words. See following examples for more details. 
                 This is a famous Google interview question, also being asked by many other companies now a days.
                 </p>        
                </div>
                <div className="ques">
                 <h2>4. Array @ Sum</h2>
                 <p>Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated sequence of dictionary words. See following examples for more details. 
                 This is a famous Google interview question, also being asked by many other companies now a days.
                 </p>        
                </div>
                <div className="ques">
                 <h2>5. Tower Of Hanoi</h2>
                 <p>Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated sequence of dictionary words. See following examples for more details. 
                 This is a famous Google interview question, also being asked by many other companies now a days.
                 </p>        
                </div>
                <div className="ques">
                 <h2>6. N-Queen Problem</h2>
                 <p>Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated sequence of dictionary words. See following examples for more details. 
                 This is a famous Google interview question, also being asked by many other companies now a days.
                 </p>        
                </div>

              </div>
            
     </div>
   </div>
  )
}

export default Public