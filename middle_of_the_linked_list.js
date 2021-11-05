
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let i = head;
    let j = head;

    while (j.next && j.next.next) {
        j = j.next.next;
        i = i.next;
    }

    if (j.next) i = i.next;

    return i;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// https://leetcode.com/problems/middle-of-the-linked-list/