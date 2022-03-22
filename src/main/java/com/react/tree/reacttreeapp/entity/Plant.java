package com.react.tree.reacttreeapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="plant")
public class Plant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "leaf_color")
	private String leaf_color;
	
	@Column(name = "leaf_shape")
	private String leaf_shape;
	
	@Column(name = "stem_color")
	private String stem_color;
	
	public Plant() {
		
	}

	public Plant(Long id, String type, String leaf_color, String leaf_shape, String stem_color) {
		super();
		this.id = id;
		this.type = type;
		this.leaf_color = leaf_color;
		this.leaf_shape = leaf_shape;
		this.stem_color = stem_color;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getLeaf_color() {
		return leaf_color;
	}

	public void setLeaf_color(String leaf_color) {
		this.leaf_color = leaf_color;
	}

	public String getLeaf_shape() {
		return leaf_shape;
	}

	public void setLeaf_shape(String leaf_shape) {
		this.leaf_shape = leaf_shape;
	}

	public String getStem_color() {
		return stem_color;
	}

	public void setStem_color(String stem_color) {
		this.stem_color = stem_color;
	}

}
