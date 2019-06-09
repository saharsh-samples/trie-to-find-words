class TrieNode {
    constructor(c) {
        this.c = c
        this.children = {}
        this.isWord = false
    }
}

class Trie {

    constructor() {
        this.rootNodes = {}
    }

    insert = word => {

        let currentNodeMap = this.rootNodes
        let currentNode = null

        for(let i = 0; i < word.length; i++) {
            const c = word.charAt(i)
            currentNode = currentNodeMap[c]
            if(currentNode == null) {
                currentNode = new TrieNode(c)
                currentNodeMap[c] = currentNode
            }
            currentNodeMap = currentNode.children
        }

        currentNode.isWord = true

    }

    contains = word => {
        let currentNode = this.rootNodes[word.charAt(0)]
        for(let i = 1; i < word.length; i++) {
            if(currentNode == null) {
                return false;
            }
            currentNode = currentNode.children[word.charAt(i)]
        }
        return currentNode != null && currentNode.isWord
    }

}

export default Trie
