package io.github.wellvergton.bean;

import java.util.List;

public class AnimeData {
	private boolean success;
	private String img;
	private int total_facts;
	private List<Fact> data;
	
	public boolean isSuccess() {
		return success;
	}
	
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public String getImg() {
		return img;
	}
	
	public void setImg(String img) {
		this.img = img;
	}
	
	public int getTotal_facts() {
		return total_facts;
	}
	
	public void setTotal_facts(int total_facts) {
		this.total_facts = total_facts;
	}
	
	public List<Fact> getData() {
		return data;
	}
	
	public void setData(List<Fact> data) {
		this.data = data;
	}
}
