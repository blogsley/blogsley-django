from blogsley.core.schemata import Connection, Edge, Node


class ImageNode(Node):
    def __init__(self, objekt):
        super().__init__(objekt)
    def wire(self):
        # result = self.objekt.__dict__
        result = super().wire()
        result['filename'] = self.objekt.filename
        result['src'] = self.objekt.src
        return result

class ImageEdge(Edge):
    def __init__(self, obj, node_class=ImageNode):
        super().__init__(obj, node_class)

class ImageConnection(Connection):
    def __init__(self, objs):
        super().__init__(objs, edge_class=ImageEdge, node_class=ImageNode)
