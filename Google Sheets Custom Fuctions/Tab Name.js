/**
  * Returns the name of the current tab. This function will not update if the tab name is changed. To update, delete feunction from the cell and redo.
 *
 * @param {}
 * @return The name of the current tab.
 * @customfunction
 */


function TABNAME() {
  
    var tabName = SpreadsheetApp.getActiveSheet().getName();
    
    return(tabName)
    
  }