function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let list = head;
    let list_1 = l1;
    let list_2 = l2;
    while (list_1 !== null && list_2 !== null) {
        if (list_1.val < list_2.val) {
            list.next = list_1;
            list_1 = list_1.next;
        } else {
            list.next = list_2;
            list_2 = list_2.next;
        }
        list = list.next;
    }

    if (list_1) {
        list.next = list_1;
    }

    if (list_2) {
        list.next = list_2;
    }

    return head.next;
};

// https://leetcode.com/problems/merge-two-sorted-lists/
